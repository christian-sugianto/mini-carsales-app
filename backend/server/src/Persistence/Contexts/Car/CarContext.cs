using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class CarContext : DbContext
    {
        public CarContext(DbContextOptions<CarContext> options)
            : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>(b =>
            {
                b.HasKey(i => i.Id);
                b.Property(i => i.VehicleType).IsRequired();
                b.Property(i => i.Make).IsRequired();
                b.Property(i => i.Model).IsRequired();
                b.Property(i => i.Engine).IsRequired();
                b.Property(i => i.BodyType).IsRequired();
                b.Property(i => i.Doors).IsRequired();
                b.Property(i => i.Wheels).IsRequired();
            });
        }
    }
}