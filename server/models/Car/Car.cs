using System;

public class Car : Vehicle
{
    public Guid CarEngineId { get; set; }
    public Guid CarBodyTypeId { get; set; }
    public int Doors { get; set; }
    public int Wheels { get; set; }

    public CarEngine CarEngine { get; set; }
    public CarBodyType CarBodyType { get; set; }
}