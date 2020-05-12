import { PacientePipe } from './paciente.pipe';

describe('PacientePipe', () => {
  it('create an instance', () => {
    const pipe = new PacientePipe();
    expect(pipe).toBeTruthy();
  });
});
