package config

import (
	"log"
	"os"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type Config struct {
	AppEnv string `env:"APP_ENV"`

	DBHost     string `env:"DB_HOST"`
	DBUser     string `env:"DB_USER"`
	DBPassword string `env:"DB_PASSWORD"`
	DBName     string `env:"DB_NAME"`
	DBPort     string `env:"DB_PORT"`
}

func LoadConfig() Config {
	if os.Getenv("APP_ENV") != "production" {
		_ = godotenv.Load()
	}

	var cfg Config

	if err := env.Parse(&cfg); err != nil {
		log.Fatal(err)
	}
	return cfg
}
