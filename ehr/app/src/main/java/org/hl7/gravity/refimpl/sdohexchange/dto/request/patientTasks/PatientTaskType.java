package org.hl7.gravity.refimpl.sdohexchange.dto.request.patientTasks;

import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hl7.fhir.r4.model.Coding;
import org.hl7.gravity.refimpl.sdohexchange.codes.PatientTaskCode;

import java.util.List;

@AllArgsConstructor
public enum PatientTaskType {
  MAKE_CONTACT(Lists.newArrayList(PatientTaskCode.MAKE_CONTACT.toCoding()));

  @Getter
  private List<Coding> codes;
}