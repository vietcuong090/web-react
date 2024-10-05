const Formattedprice = ({ amount }: { amount?: number }) => {
  const formattAmount = new Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return <span>{formattAmount}</span>;
};

export default Formattedprice;
