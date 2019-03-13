import * as S3 from 'aws-sdk/clients/s3';

export interface IAWSService {
	uploadDailyTransactionPicture(picture: S3.Types.Body, transactionId: string): Promise<S3.ManagedUpload.SendData>;
}
