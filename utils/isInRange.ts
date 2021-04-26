const isInRange = (price: number, range: string): boolean => {
  switch (range) {
    case '<20':
      return price < 20;

    case '20-100':
      return price >= 20 && price <= 100;

    case '100-200':
      return price >= 100 && price <= 200;

    case '>200':
      return price > 200;

    default:
      return true;
  }
};

export { isInRange };
