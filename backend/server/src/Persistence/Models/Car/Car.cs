using System;

namespace Models
{
    public class Car : Vehicle
    {
        public Car()
        {
            Id = Guid.NewGuid();
            VehicleType = VehicleType.CAR;
        }
        public string Engine { get; set; }
        public string BodyType { get; set; }
        public int Doors { get; set; }
        public int Wheels { get; set; }
    }
}
