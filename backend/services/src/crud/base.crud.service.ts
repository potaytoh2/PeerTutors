import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { plainToClass } from 'class-transformer';
import { DeepPartial } from 'typeorm';

export class BaseCrudService<T> extends TypeOrmCrudService<T> {
  // Create a new entity
  public async createOne(req: CrudRequest, dto): Promise<T> {
    const { returnShallow } = req.options.routes.createOneBase;
    const entityToSave = this.prepareEntityBeforeSave(dto, req.parsed);

    if (!entityToSave) {
      this.throwBadRequestException('Empty data. Nothing to save.');
    }

    const savedEntity = await this.repo.save<any>(entityToSave);
    return savedEntity;
  }

  // Update an existing entity
  public async updateOne(req: CrudRequest, dto): Promise<T> {
    const { allowParamsOverride, returnShallow } =
      req.options.routes.updateOneBase;

    const paramsFilters = this.getParamFilters(req.parsed);
    const foundEntity = await this.getOneOrFail(req, returnShallow);

    const updatedEntity = !allowParamsOverride
      ? { ...foundEntity, ...dto, ...paramsFilters, ...req.parsed.authPersist }
      : { ...foundEntity, ...dto, ...req.parsed.authPersist };

    const savedEntity = await this.repo.save(
      plainToClass(this.entityType, updatedEntity) as unknown as DeepPartial<T>,
    );

    return savedEntity;
  }
  // Save an entity
  async save(data) {
    return this.repo.save(data);
  }

  // Delete an entity by its ID
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
