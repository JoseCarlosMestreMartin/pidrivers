const getCurrentCountries = ({ page, limit, countries }) => {
    const start = +page === 1 ? 0 : (page - 1) * limit - 1;
    const end = +page === 1 ? limit - 1 : limit * page - 1;
    return countries.slice(start, end);
  };
export {
    getCurrentCountries,

  };