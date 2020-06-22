const URL = 'http://localhost:5000/api/cars'; // only for dev

class CarsService {
  getCars = async () => {
    const res = await fetch(URL);
    return res.json();
  };

  postCar = async (data: CarType) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    const res = await fetch(URL, requestOptions);
    return res.json();
  };
}

export interface CarType {
  id: string;
  make: string;
  model: string;
  engine: string;
  bodyType: number;
  wheels: number;
  doors: number;
}

const carsService = new CarsService();
export default carsService;
