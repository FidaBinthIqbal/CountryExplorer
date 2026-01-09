import { notFound } from "next/navigation";
import Image from "next/image";
import { Country } from "@/types/country";
import { getCountryByCode } from "@/lib/api";

interface Params {
  code: string;
}

interface PageProps {
  params: Params | Promise<Params>;
}

export default async function CountryPage({ params }: PageProps) {
  const { code } = params instanceof Promise ? await params : params;

  if (!code) notFound();

  let country: Country;
  try {
    country = await getCountryByCode(code);
  } catch {
    notFound();
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {country.name.common}
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <Image
          src={country.flags.png}
          alt={country.name.common}
          width={300}
          height={180}
          style={{ objectFit: "cover", borderRadius: "8px" }}
          loading="eager"
        />
      </div>

      <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      </div>
    </div>
  );
}