import React from "react";
import formatNumber from "../../utils/fomatter";

function withSanitizedData(WrappedComponent, rawData) {
  const { financial, address, physical, mainImageUrl } = rawData;
  const sanitizedProps = {
    ...rawData,
    yearBuilt: "----",
    priceFormatted: "----",
    rentFormmated: "----",
    grossField: "----",
    imageUrl: !mainImageUrl
      ? "https://via.placeholder.com/200x130?text=No image"
      : mainImageUrl,
  };

  if (physical) {
    sanitizedProps.yearBuilt = physical.yearBuilt;
  }
  if (financial && financial.listPrice) {
    sanitizedProps.priceFormatted = "$" + formatNumber(financial.listPrice);
  }
  if (financial && financial.monthlyRent) {
    sanitizedProps.rentFormmated = "$" + formatNumber(financial.monthlyRent);
  }
  if (financial && financial.monthlyRent && financial.listPrice) {
    sanitizedProps.grossField =
      Number(
        ((financial.monthlyRent * 12) / financial.listPrice) * 100
      ).toFixed(2) + "%";
  }
  sanitizedProps.fullAdress = `${address.address1}, ${address.city}, ${address.state} ${address.zip}`;

  return <WrappedComponent key={rawData.id} {...sanitizedProps} />;
}
export default withSanitizedData;
