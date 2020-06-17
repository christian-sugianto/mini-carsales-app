using System;

public class Car : Vehicle
{
    public Car(Guid id, string make, string model, string engine, int doors, int wheels)
    {
        Id = id;
        VehicleType = VehicleType.CAR;
        Make = make;
        Model = model;
        Engine = engine;
        Doors = doors;
        Wheels = wheels;
    }
    public string Engine { get; set; }
    public string BodyType { get; set; }
    public int Doors { get; set; }
    public int Wheels { get; set; }
}