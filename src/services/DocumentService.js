import request from "./request";

const getDocumentItems = async documentId =>
  await request({
    url: `/documents/${documentId}/document-items`,
    method: "GET"
  });

const stornoDocument = async documentId => 
    await request({
        url: `/documents/${documentId}/storno`,
        method: "POST"
    });

export { getDocumentItems, stornoDocument };