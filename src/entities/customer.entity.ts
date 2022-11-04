import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CustomerEntity {
  /**
   * The id of the Customer
   * @example 1
   */
  @ApiProperty({ example: 1 })
  readonly id: number;

  /**
   * The name of the Customer
   * @example Customer Name
   */
  @ApiProperty({ example: 'Customer Name' })
  readonly name: string;

  /**
   * The customer address
   * @example Customer Address
   */
  @ApiPropertyOptional({ example: 'Customer Address' })
  readonly address?: string;

  /**
   * Indicates whether Customer is active or not
   * @example true
   */
  @ApiPropertyOptional({ example: true })
  readonly active?: boolean;

  /**
   * Creation date
   * @example
   */
  @ApiPropertyOptional({ example: new Date() })
  readonly createdAt?: Date;

  /**
   * Last updated date
   * @example
   */
  @ApiPropertyOptional({ example: new Date() })
  readonly updatedAt?: Date;
}
