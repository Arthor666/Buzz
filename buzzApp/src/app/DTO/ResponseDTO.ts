export class ResponseDTO{
  success: boolean;
  reason: string;

  constructor(responseDTO: any) {
    this.success = responseDTO.success;
    this.reason = responseDTO.reason;
  }

}
