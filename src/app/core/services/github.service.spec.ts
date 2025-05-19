import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });

    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data on success', () => {
    const mockUser = { login: 'theoctocat' };

    service.queryUser('theoctocat').subscribe((res) => {
      expect(res).toEqual(mockUser);
    });

    const req = httpMock.expectOne('https://api.github.com/users/theoctocat');
    expect(req.request.method).toBe('GET');
    // Ele vai simular a resposta da Api
    req.flush(mockUser);
  });

  it('should handle 404 error', () => {
    service.queryUser('invalid-user').subscribe({
      next: () => fail('should have failed with 404'),
      error: (err) => {
        expect(err.status).toBe(404);
      }
    });

    const req = httpMock.expectOne('https://api.github.com/users/invalid-user');
    req.flush({ message: 'Not Found' }, { status: 404, statusText: 'Not Found' });
  });
});
