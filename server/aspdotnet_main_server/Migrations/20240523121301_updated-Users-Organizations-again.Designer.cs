﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using aspdotnet_main_server.db;

#nullable disable

namespace aspdotnetmainserver.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20240523121301_updated-Users-Organizations-again")]
    partial class updatedUsersOrganizationsagain
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("aspdotnet_main_server.Entities.EventModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<Guid?>("OrganizationModelId")
                        .HasColumnType("uuid");

                    b.Property<string>("createdBy")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("createdOn")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("eventDateTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("eventDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("eventName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("OrganizationModelId");

                    b.ToTable("EventModels");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.OrganizationModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("OrganizationName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("OrganizationModel");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.PrayerTimesModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.ToTable("PrayerTimeModel");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.SinglePrayerTimeRecordModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("DelayInMinutes")
                        .HasColumnType("integer");

                    b.Property<bool>("IsDelayInMinutes")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsSpecific")
                        .HasColumnType("boolean");

                    b.Property<DateTime>("LastUpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("PrayerTimesModelId")
                        .HasColumnType("uuid");

                    b.Property<string>("SpecificPrayerTime")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("PrayerTimesModelId");

                    b.ToTable("SinglePrayerTimeRecordModel");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.UserModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("HashedPassword")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid?>("OrganizationID")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("OrganizationModelId")
                        .HasColumnType("uuid");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<string>("UserRole")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("OrganizationID");

                    b.HasIndex("OrganizationModelId");

                    b.ToTable("UserModels");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.EventModel", b =>
                {
                    b.HasOne("aspdotnet_main_server.Entities.OrganizationModel", null)
                        .WithMany("Events")
                        .HasForeignKey("OrganizationModelId");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.SinglePrayerTimeRecordModel", b =>
                {
                    b.HasOne("aspdotnet_main_server.Entities.PrayerTimesModel", null)
                        .WithMany("PrayerTimes")
                        .HasForeignKey("PrayerTimesModelId");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.UserModel", b =>
                {
                    b.HasOne("aspdotnet_main_server.Entities.OrganizationModel", "Organization")
                        .WithMany("Users")
                        .HasForeignKey("OrganizationID");

                    b.HasOne("aspdotnet_main_server.Entities.OrganizationModel", null)
                        .WithMany("PrayerTimes")
                        .HasForeignKey("OrganizationModelId");

                    b.Navigation("Organization");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.OrganizationModel", b =>
                {
                    b.Navigation("Events");

                    b.Navigation("PrayerTimes");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("aspdotnet_main_server.Entities.PrayerTimesModel", b =>
                {
                    b.Navigation("PrayerTimes");
                });
#pragma warning restore 612, 618
        }
    }
}
