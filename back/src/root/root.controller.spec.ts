import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller.js';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
    }).compile();

    controller = module.get<RootController>(RootController);
  });

  it('should describe the service and its endpoints', () => {
    expect(controller.info()).toEqual({
      name: 'portfolio-api',
      status: 'ok',
      endpoints: ['GET /health'],
    });
  });
});
