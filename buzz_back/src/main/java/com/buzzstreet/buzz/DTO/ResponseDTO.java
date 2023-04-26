package com.buzzstreet.buzz.DTO;

import java.io.Serializable;

public class ResponseDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private boolean success;
	
	private String reason;
	
	

	public ResponseDTO(String reason,boolean success) {
		super();
		this.success = success;
		this.reason = reason;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	
	
	

}
