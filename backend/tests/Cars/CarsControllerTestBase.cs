using System;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Cars.Tests
{
    public class CarsControllerTestBase
    {
        protected CarsControllerTestBase(DbContextOptions<CarContext> contextOptions)
        {
            ContextOptions = contextOptions;

            Seed();
        }

        protected DbContextOptions<CarContext> ContextOptions { get; }

        private void Seed()
        {
            using (var context = new CarContext(ContextOptions))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var firstCar = new Car();
                firstCar.Make = "Nissan";
                firstCar.Model = "Juke 2020";
                firstCar.Engine = "1.0-litre, three-cylinder turbo-petrol engine";
                firstCar.BodyType = "SUV";
                firstCar.Doors = 5;
                firstCar.Wheels = 4;

                var secondCar = new Car();
                secondCar.Make = "Suzuki";
                secondCar.Model = "Vitara Turbo 2020";
                secondCar.Engine = "86kW/156Nm naturally-aspirated 1.6-litre petrol engine";
                secondCar.BodyType = "SUV";
                secondCar.Doors = 5;
                secondCar.Wheels = 4;
                context.AddRange(firstCar, secondCar);

                context.SaveChanges();
            }
        }
    }
}