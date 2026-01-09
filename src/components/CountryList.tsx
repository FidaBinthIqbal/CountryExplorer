"use client";

import { Country } from "@/types/country";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Props {
  countries: Country[];
}

export default function CountryList({ countries }: Props) {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="country-list">
      {}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {}
      <div className="grid">
        {filteredCountries.map((country) => (
          <Link
            key={country.cca3}
            href={`/country/${country.cca3}`}
            className="card"
          >
            <Image
              src={country.flags.png}
              alt={country.name.common}
              width={320}
              height={200}
              className="card-image"
              loading="eager"
            />
            <div className="card-body">
              <h2 className="card-title">{country.name.common}</h2>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">
                Population: {country.population.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <p className="no-countries">No countries found</p>
      )}
    </div>
  );
}