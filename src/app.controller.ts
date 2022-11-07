import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CustomerEntity } from './entities/customer.entity';

@ApiTags('Customer API')
@Controller('customer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * /customer/{id} (GET)
   * @param id The id of the Customer
   * @returns Customer model
   */
  @ApiOperation({
    summary: 'Asynchronously fetch a customer by its identifier.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CustomerEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get(':id')
  async get(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<CustomerEntity> {
    return await this.appService.get(id);
  }
}
