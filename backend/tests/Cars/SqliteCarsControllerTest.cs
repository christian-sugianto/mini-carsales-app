
using System.Collections.Generic;
using System.Linq;
using Controllers;
using Microsoft.EntityFrameworkCore;
using Models;
using Xunit;

namespace Cars.Tests
{
    public class SqliteCarsControllerTest : CarsControllerTest
    {
        public SqliteCarsControllerTest()
            : base(
                new DbContextOptionsBuilder<CarContext>()
                    .UseSqlite("Filename=Test.db")
                    .Options)
        {
        }

        [Fact]
        public async void CanGetCars()
        {
            using (var context = new CarContext(ContextOptions))
            {
                var controller = new CarsController(context);

                // get all cars
                var enumerableCars = await controller.GetCars();
                List<Car> cars = enumerableCars.Value.ToList();

                // test total number of cars
                Assert.Equal(2, cars.Count());

                // test first car
                Assert.Equal("Nissan", cars[0].Make);
                Assert.Equal(VehicleType.CAR, cars[0].VehicleType);
                Assert.Equal("Juke 2020", cars[0].Model);
                Assert.Equal("1.0-litre, three-cylinder turbo-petrol engine", cars[0].Engine);
                Assert.Equal("SUV", cars[0].BodyType);
                Assert.Equal(5, cars[0].Doors);
                Assert.Equal(4, cars[0].Wheels);

                // test second car
                Assert.Equal("Suzuki", cars[1].Make);
                Assert.Equal(VehicleType.CAR, cars[1].VehicleType);
                Assert.Equal("Vitara Turbo 2020", cars[1].Model);
                Assert.Equal("86kW/156Nm naturally-aspirated 1.6-litre petrol engine", cars[1].Engine);
                Assert.Equal("SUV", cars[1].BodyType);
                Assert.Equal(5, cars[1].Doors);
                Assert.Equal(4, cars[1].Wheels);
            }
        }

        [Fact]
        public async void CanGetCar()
        {
            using (var context = new CarContext(ContextOptions))
            {
                var controller = new CarsController(context);

                // get all cars
                var enumerableCars = await controller.GetCars();
                List<Car> cars = enumerableCars.Value.ToList();

                // get a car
                var car = (await controller.GetCar(cars[0].Id)).Value;

                // test car attributes
                Assert.Equal("Nissan", car.Make);
                Assert.Equal(VehicleType.CAR, car.VehicleType);
                Assert.Equal("Juke 2020", car.Model);
                Assert.Equal("1.0-litre, three-cylinder turbo-petrol engine", car.Engine);
                Assert.Equal("SUV", car.BodyType);
                Assert.Equal(5, car.Doors);
                Assert.Equal(4, car.Wheels);
            }
        }

        [Fact]
        public async void CanPutCar()
        {
            using (var context = new CarContext(ContextOptions))
            {
                var controller = new CarsController(context);

                // get all cars
                var cars = (await controller.GetCars()).Value.ToList();

                // new values
                var updatedCar = new Car(cars[0].Id, "Hyundai", "Sonata Active", "138kW/241Nm 2.4-litre four-cylinder engine", "Sedan", 4, 4);

                // update car
                await controller.PutCar(cars[0].Id, updatedCar);

                cars = (await controller.GetCars()).Value.ToList();
                var car = (await controller.GetCar(cars[0].Id)).Value;

                // test updated car values
                Assert.Equal("Hyundai", car.Make);
                Assert.Equal(VehicleType.CAR, car.VehicleType);
                Assert.Equal("Sonata Active", car.Model);
                Assert.Equal("138kW/241Nm 2.4-litre four-cylinder engine", car.Engine);
                Assert.Equal("Sedan", car.BodyType);
                Assert.Equal(4, car.Doors);
                Assert.Equal(4, car.Wheels);
            }
        }
    }
}