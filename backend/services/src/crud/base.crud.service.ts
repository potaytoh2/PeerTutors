import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { plainToClass } from 'class-transformer';
import { DeepPartial } from 'typeorm';

export class BaseCrudService<T> extends TypeOrmCrudService<T> {
  public async createOne(req: CrudRequest, dto): Promise<T> {
    const { returnShallow } = req.options.routes.createOneBase;
    const entity = this.prepareEntityBeforeSave(dto, req.parsed);
    if (!entity) {
      this.throwBadRequestException('Empty data. Nothing to save.');
    }
    const saved = await this.repo.save<any>(entity);
    return saved;
  }

  public async updateOne(req: CrudRequest, dto): Promise<T> {
    const { allowParamsOverride, returnShallow } =
      req.options.routes.updateOneBase;
    const paramsFilters = this.getParamFilters(req.parsed);
    const found = await this.getOneOrFail(req, returnShallow);
    const toSave = !allowParamsOverride
      ? { ...found, ...dto, ...paramsFilters, ...req.parsed.authPersist }
      : { ...found, ...dto, ...req.parsed.authPersist };
    const updated = await this.repo.save(
      plainToClass(this.entityType, toSave) as unknown as DeepPartial<T>,
    );

    return updated;
  }

  // fix bug nestjsx/crud
  protected getFieldWithAlias(field: string, sort = false) {
    const cols = field.split('.');
    switch (cols.length) {
      case 1:
        return this.alias + '.' + field;
      case 2:
        return field;
      default:
        return cols.slice(cols.length - 2, cols.length).join('.');
    }
  }

  async save(data) {
    return this.repo.save(data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}
