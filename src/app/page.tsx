import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="main-text">
        <p className="main-text__title">
          <strong>Find</strong> all your favorite <br />{" "}
          <strong>Pokemon</strong>
        </p>

        <p className="main-text__description">
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </p>
        <Link href="/pokedex">
          <button className="main-text__btn">See pokemons</button>
        </Link>
      </div>
      <div className="main-image">
        <Image
          src="/images/home-image.svg"
          alt="pikachu and two pokeballs"
          priority
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
