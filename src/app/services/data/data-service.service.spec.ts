import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty initially', () => {
    expect(service.getUserData()).toEqual({})
  })

  it('should be able to store details', () => {
    const userData = {userName: 'Rugved', bio: 'hi this is my first github account'}
    service.storeUserData(userData);
    expect(service.getUserData()).toEqual(userData)
  })

  it ('should be able to delete userData', () => {
    const userData = {userName: 'Rugved', bio: 'hi this is my first github account'}
    service.storeUserData(userData);
    service.deleteUserData()
    expect(service.getUserData()).toEqual({})
  })
});
