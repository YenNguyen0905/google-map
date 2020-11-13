mapboxgl.accessToken = 'pk.eyJ1IjoieWVubmllIiwiYSI6ImNraGZ1YjBkNTB1bjQyc3A1eDE2Mzd1NHkifQ.9vemuDUYoE6HwGvEFXV7zQ';
       navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true}) 
       function successLocation(position){
        setupMap([position.coords.longitude, position.coords.latitude]);
       }
       function errorLocation(){
       setupMap([-2.24,53.48])
       }
       function setupMap(center){
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: center,
            zoom: 10
        })

        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav)

        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken
          })
          
          map.addControl(directions, 'top-left');
       }

       
