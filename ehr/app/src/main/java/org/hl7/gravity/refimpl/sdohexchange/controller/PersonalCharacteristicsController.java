package org.hl7.gravity.refimpl.sdohexchange.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.hl7.gravity.refimpl.sdohexchange.config.SpringFoxConfig;
import org.hl7.gravity.refimpl.sdohexchange.dto.request.characteristic.NewPersonalCharacteristicDto;
import org.hl7.gravity.refimpl.sdohexchange.dto.response.ResourceIdDto;
import org.hl7.gravity.refimpl.sdohexchange.dto.response.characteristic.PersonalCharacteristicDto;
import org.hl7.gravity.refimpl.sdohexchange.service.PersonalCharacteristicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("personal-characteristics")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
@Api(tags = {SpringFoxConfig.PERSONAL_CHARACTERISTICS})
public class PersonalCharacteristicsController {

  private final PersonalCharacteristicsService personalCharacteristicsService;

  @GetMapping
  @ApiOperation(value = "List all Personal Characteristic.")
  public List<PersonalCharacteristicDto> list(@RequestHeader(required = false) Integer count) {
    return personalCharacteristicsService.listPersonalCharacteristics(count);
  }

  @PostMapping
  @ApiOperation(value = "Creates new Personal Characteristic Observation resource")
  public ResourceIdDto create(@RequestBody @Valid NewPersonalCharacteristicDto newPersonalCharacteristicDto) {
    return new ResourceIdDto(personalCharacteristicsService.newPersonalCharacteristic(newPersonalCharacteristicDto));
  }
}
