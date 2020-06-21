using System;

namespace Models
{
    public abstract class Vehicle
    {
        public Guid Id { get; set; }
        public VehicleType VehicleType { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
    }
}
