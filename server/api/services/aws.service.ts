import { inject, injectable } from 'inversify';

import { Upload } from 'graphql-upload';

import * as S3 from 'aws-sdk/clients/s3';

import { IAWSService } from '../interfaces/service/iaws';

@injectable()
export class AWSService implements IAWSService {
	private myS3: S3;

	constructor() {
		this.myS3 = new S3({
			accessKeyId: process.env.AWS_ACCESS_KEY,
			secretAccessKey: process.env.AWS_SECRET_KEY,
		});
	}

	public uploadDailyTransactionPicture(picture: Upload, id: string): Promise<S3.ManagedUpload.SendData> {
		const config: S3.Types.PutObjectRequest = {
			Bucket: `${process.env.AWS_BUCKET}/daily-transactions/${id}`,
			Body: picture.createReadStream(),
			Key: `${picture.filename}_${new Date().toISOString()}`,
			Metadata: {
				type: 'jpeg',
				crop: 'false',
			},
		};
		const upload = this.myS3.upload(config);
		upload.on('httpUploadProgress', (listener: S3.ManagedUpload.Progress) => {
			console.log(`${listener.loaded}/${listener.total}`);
		});
		return upload.promise();
	}
}
