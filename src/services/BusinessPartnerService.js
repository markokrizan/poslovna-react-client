import request from "./request";

const getBusinessPartners = async () =>
  await request({
    url: `/business-partners`,
    method: "GET"
  });

export { getBusinessPartners };
