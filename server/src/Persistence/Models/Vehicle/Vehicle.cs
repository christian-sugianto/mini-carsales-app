using System;

public class Vehicle
{
    public Guid Id { get; set; }
    public Guid VehicleTypeId { get; set; }
    public VehicleType VehicleType { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
}