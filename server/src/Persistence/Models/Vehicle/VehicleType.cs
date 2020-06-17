using System;

public class VehicleType
{
    public VehicleType(Guid vehicleTypeId, string name)
    {
        Id = vehicleTypeId;
        Name = name;
    }

    public Guid Id { get; set; }
    public string Name { get; set; }
}