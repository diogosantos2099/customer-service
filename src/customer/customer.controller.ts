import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('Customer API')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  /**
   * /customer (POST)
   * @returns Created customer
   */
  @ApiOperation({
    summary: 'Create a new customer',
  })
  @ApiCreatedResponse({
    type: Customer,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  /**
   * /customer (GET)
   * @returns All customers
   */
  @ApiOperation({
    summary: 'Fetch all customers',
  })
  @ApiOkResponse({
    type: [Customer],
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  /**
   * /customer/{id} (GET)
   * @param id customer id
   * @returns customer by id
   */
  @ApiOperation({
    summary: 'Fetch customer by id',
  })
  @ApiOkResponse({
    type: Customer,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  /**
   * /customer (PATCH)
   * @param id customer id
   * @param updateCustomerDto customer to update
   * @returns updated customer
   */
  @ApiOperation({
    summary: 'Update a customer by id',
  })
  @ApiOkResponse({
    type: Customer,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  /**
   * /customer (DELETE)
   * @param id customer id
   * @param updateCustomerDto customer to delete
   * @returns The deleted customer
   */
  @ApiOperation({
    summary: 'Delete a customer by id',
  })
  @ApiOkResponse({
    type: Customer,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
