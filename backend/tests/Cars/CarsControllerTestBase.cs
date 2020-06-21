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

                var firstCar = new Car(Guid.NewGuid(), "Nissan", "Juke 2020", "1.0-litre, three-cylinder turbo-petrol engine", "SUV", 5, 4);

                var secondCar = new Car(Guid.NewGuid(), "Suzuki", "Vitara Turbo 2020", "86kW/156Nm naturally-aspirated 1.6-litre petrol engine", "SUV", 5, 4);

                context.AddRange(firstCar, secondCar);

                context.SaveChanges();
            }
        }
    }
}