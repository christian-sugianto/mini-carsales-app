using System;

public class Vehicle
{
    public Guid Id { get; set; }
    public Guid VehicleTypeId { get; set; }
    public Guid VehicleMakeId { get; set; }
    public Guid VehicleModelId { get; set; }

    public VehicleType VehicleType { get; set; }
    public VehicleMake VehicleMake { get; set; }
    public VehicleModel VehicleModel { get; set; }
}