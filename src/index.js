const AEMClient = require('./aem-auth');

const client = new AEMClient('http://localhost:4502', {loginToken: '3b66f522-1e2a-4de7-a764-649dc254ffeb%3ab8c17ac1-be62-4312-84e5-297c712ca3e9_3d11b3b9444bbbcb76dea08d4fbcf97b%3acrx.default'});

client.getResource('content/freestyle-cms/fos-bundles/4-0/7100-bundles/multilanguage-bundle/group_contentgroup/brand_bottom-cluster--non-primary--brand1095543727', 'infinity')
  .then((res) => {
    console.log(res.data);
  }, (err) => {
    console.log(err.request);
  });

// client.query({
//   path: '/content/freestyle-cms',
//   '1_property': 'sling:resourceType',
//   '1_property.value': 'freestyle-cms/contentmanagement/components/page/fos/9000/promotiondetail',
//   'p.limit': 80,
//   'p.hits': 'selective',
//   'p.properties': 'jcr:title'
// }).then((res) => {
//   console.log(res.data);
// }, (err) => {
//   console.log(err.request);
// });
