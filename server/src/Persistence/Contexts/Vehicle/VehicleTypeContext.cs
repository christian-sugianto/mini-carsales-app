using System;
using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class VehicleTypeContext : DbContext
    {
        public VehicleTypeContext(DbContextOptions<VehicleTypeContext> options)
            : base(options)
        {
        }

        public DbSet<VehicleTypeContext> VehicleTypeContexts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleType>().HasData(new VehicleType(Guid.NewGuid(), "Car"));
        }
    }
}