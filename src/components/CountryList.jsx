import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first country by adding a city." />;

  const countries = cities.reduce(
    (acc, cur) => {
      if (!acc.map((el) => el.country).includes(cur.country))
        return [...acc, { country: cur.country, emoji: cur.emoji, id: cur.id }];
      else return acc;
    },
    // acc.includes(acc?.country === cur.country)
    //   ? acc
    //   : [...acc, { country: cur.country, emoji: cur.emoji, id: cur.id }],
    []
  );
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
