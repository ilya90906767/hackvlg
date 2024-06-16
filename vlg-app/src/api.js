// suggest_type=route_endpoint.

const apiKey2 = '59e2dcbb-0312-4a54-96be-6b683a17331d';

export const apiKey = 'da151dd0-1e70-463d-8c3a-fb414f286cdb';

export const apiUrl = '/api/v1/';

export const saveRoute = async (points) => {
    try {
        if (points?.length < 2) throw new Error('Нет маршрута для сохранения' );

        const url = apiUrl + 'routes/save';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: {points} }),
        });

        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }

        const data = await response.json();
        console.log('Успешный запрос:', data);
        return 1;
    } catch (error) {
        console.error('Ошибка при сохранении маршрута:', error);
    }
};

/*const apiUrl = 'http://routing.api.2gis.com/routing/7.0.0/global';
const [firstPoint, setFirstPoint] = useState({ lon: 37.582591, lat: 55.775364 });
const [secondPoint, setSecondPoint] = useState({ lon: 37.579206, lat: 55.774362 });


const buildRoute = () => {

  console.log('Start')
  const requestBody = {
    points: [
      { type: 'stop', lon: firstPoint.lon, lat: firstPoint.lat },
      { type: 'stop', lon: secondPoint.lon, lat: secondPoint.lat },
    ],
    locale: 'ru',
    transport: 'car',
    route_mode: 'fastest',
    traffic_mode: 'jam',
  };

  fetch(`${apiUrl}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.json())
 .then(data => {
    console.log('Response data:', data); // Add this line
  })
    .catch(error => console.error(error));

};*/