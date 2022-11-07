import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCustomerDto {
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
}
