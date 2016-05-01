import zlib from 'zlib';
import AWS from 'aws-sdk';
import renderPath from '../app/libs/server/renderPath';


const s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});

const baseContext = {
  title: 'Resume',
  jsAsset: __JS_ASSET__,
  cssAsset: __CSS_ASSET__
};

function putObject(params) {
  return new Promise((resolve, reject) => {
    s3.putObject(params, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export const handler = (event, context, cb) => {
  renderPath('/', baseContext)
    .then(html => {
      const gzipped = zlib.gzipSync(html);

      return putObject({
        Bucket: 'andrew.sprou.se',
        Key: 'index.html',
        Body: gzipped,
        ACL: 'public-read',
        ContentType: 'text/html',
        ContentEncoding: 'gzip'
      });

    })
    .then(cb)
    .catch((error) => {
      cb(JSON.stringify(error));
    });
};
