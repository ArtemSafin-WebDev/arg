document.addEventListener("DOMContentLoaded", () => {
  const elements = Array.from(document.querySelectorAll(".js-map"));

  elements.forEach((element) => {
    ymaps.ready(initMap);
    function initMap() {
      console.log("MAP");
      const mapElement = element.querySelector(".js-map-element");

      console.log(mapElement);

      const center = element.getAttribute("data-center").split(",");

      const coords = element.getAttribute("data-coords").split(",");
      const zoom = element.getAttribute("data-zoom");

      const mapInstance = new ymaps.Map(mapElement, {
        center: center,
        zoom: zoom ? zoom : 12,
        controls: [],
      });

      mapInstance.behaviors.disable("scrollZoom");

      const zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small",
          position: {
            right: 10,
            bottom: 10,
          },
        },
      });
      mapInstance.controls.add(zoomControl);

      var objectManager = new ymaps.ObjectManager({
        geoObjectOpenBalloonOnClick: false,
        clusterize: false,
      });
      mapInstance.geoObjects.add(objectManager);

      const objectToAdd = {
        id: coords.join("-"),
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: coords,
        },
        options: {
          balloonShadow: false,
          hideIconOnBalloonOpen: false,
          iconColor: "#741239",
        },
      };

      objectManager.add(objectToAdd);
    }
  });
});
