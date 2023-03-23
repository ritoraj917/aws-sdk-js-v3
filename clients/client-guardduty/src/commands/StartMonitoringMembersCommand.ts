// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { StartMonitoringMembersRequest, StartMonitoringMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartMonitoringMembersCommand,
  serializeAws_restJson1StartMonitoringMembersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartMonitoringMembersCommand}.
 */
export interface StartMonitoringMembersCommandInput extends StartMonitoringMembersRequest {}
/**
 * @public
 *
 * The output of {@link StartMonitoringMembersCommand}.
 */
export interface StartMonitoringMembersCommandOutput extends StartMonitoringMembersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
 *       restart monitoring of accounts that you stopped monitoring with the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html">StopMonitoringMembers</a>
 *        operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StartMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StartMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StartMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartMonitoringMembersCommandInput - {@link StartMonitoringMembersCommandInput}
 * @returns {@link StartMonitoringMembersCommandOutput}
 * @see {@link StartMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 *
 */
export class StartMonitoringMembersCommand extends $Command<
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartMonitoringMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMonitoringMembersCommandInput, StartMonitoringMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMonitoringMembersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "StartMonitoringMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartMonitoringMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMonitoringMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMonitoringMembersCommandOutput> {
    return deserializeAws_restJson1StartMonitoringMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
