"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCountries } from "@/lib/api";
import { Country } from "@/types/country";

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10">Loading countries...</p>;
  }

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        🌍 Country Explorer
      </h1>

      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring
                     bg-white dark:bg-gray-800
                     text-gray-900 dark:text-white"
        />
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <Link
            key={country.cca3}
            href={`/country/${country.cca3}`}
            className="border rounded-lg shadow hover:shadow-lg transition
                       bg-white dark:bg-gray-800"
          >
            <div className="p-4">
              <Image
                src={country.flags.png}
                alt={country.name.common}
                width={240}
                height={160}
                className="w-full h-[160px] object-cover rounded-md"
              />

              <h2 className="text-lg font-semibold mt-3 text-gray-900 dark:text-white">
                {country.name.common}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Region: {country.region}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Population: {country.population.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {}
      {filteredCountries.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No countries found.
        </p>
      )}
    </main>
  );
}