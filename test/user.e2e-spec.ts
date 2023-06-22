import { INestApplication } from '@nestjs/common';

describe('Api gateway (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = (global as any).app;
  });

  it('Just test', async () => {
    expect(true).toEqual(true);
  });
});
