import request from "./request";

const getFiscalYears = async () =>
    await request({
    url: `/fiscal-years`,
    method: "GET"
  });

const getFicalYearDocuments = async fiscalYearId =>
  await request({
    url: `/fiscal-years/${fiscalYearId}/documents`,
    method: "GET"
  });

const concludeFiscalYear = async () =>
  await request({
    url: `/fiscal-years/conclude`,
    method: "POST"
  });

export { getFicalYearDocuments, getFiscalYears, concludeFiscalYear };