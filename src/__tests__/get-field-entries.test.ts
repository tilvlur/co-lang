// @ts-ignore
import { CoLang } from '../../dist'

describe('Test .getFieldEntries method of Condition language', () => {
  const conditionLanguage = new CoLang();

  describe('Test ValueExpr', () => {
    test("Returns Set {'MISTInjuryType'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF Active Bleeding $FROM MISTInjuryType $THEN',
      });

      expect(result).toEqual(new Set(['MISTInjuryType']));
    });
  });

  describe('Test ValuesExpr', () => {
    test("Returns Set {'Look'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF Foreign Body,Beard,Large Tongue,Loose Teeth,Other Issues $FROM Look $THEN',
      });

      expect(result).toEqual(new Set(['Look']));
    });
  });

  describe('Test ComparatorExpr', () => {
    test("Returns Set {'AgeInYears'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF >=65 $FROM AgeInYears $THEN',
      });

      expect(result).toEqual(new Set(['AgeInYears']));
    });
  });

  describe('Test AnyExpr', () => {
    test("Returns Set {'Assailant'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF $ANY $FROM Assailant $THEN',
      });

      expect(result).toEqual(new Set(['Assailant']));
    });
  });

  describe('Test EmptyExpr', () => {
    test("Returns Set {'DischargeFromED'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF $EMPTY $FROM DischargeFromED $THEN',
      });

      expect(result).toEqual(new Set(['DischargeFromED']));
    });
  });

  describe('Test NotExpr', () => {
    test("Returns Set {'UrgentDefinitiveAirwayIndicated2'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF $NOT(NONE) $FROM UrgentDefinitiveAirwayIndicated2 $THEN',
      });

      expect(result).toEqual(new Set(['UrgentDefinitiveAirwayIndicated2']));
    });
  });

  describe('Test NumberExpr', () => {
    test("Returns Set {'MallampatiClass'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF 35 $FROM MallampatiClass $THEN',
      });

      expect(result).toEqual(new Set(['MallampatiClass']));
    });
  });

  describe('Test BinaryExpr', () => {
    test("Returns Set {'AgeInYears', 'SceneTotalGCS', 'TotalGCS'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition:
          '$IF <16 $FROM AgeInYears $THEN $AND ( $IF <=12 $FROM SceneTotalGCS $THEN $OR $IF <=12 $FROM TotalGCS $THEN )',
      });

      expect(result).toEqual(new Set(['AgeInYears', 'SceneTotalGCS', 'TotalGCS']));
    });
  });

  describe('Test NumbersExpr', () => {
    test("Returns Set {'MallampatiClass'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF 3,4 $FROM MallampatiClass $THEN',
      });

      expect(result).toEqual(new Set(['MallampatiClass']));
    });
  });

  describe('Test ComplexExpr', () => {
    test("Returns Set {'MISTInjury', 'MISTInjuryLocation', 'MISTInjuryType'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition:
          '$IF $COMPLEX($IF Right Thigh $FROM MISTInjuryLocation $THEN $AND $IF Deformity $FROM MISTInjuryType $THEN) $FROM MISTInjury $THEN',
      });

      expect(result).toEqual(new Set(['MISTInjury', 'MISTInjuryLocation', 'MISTInjuryType']));
    });
  });

  describe('Test CountExpr', () => {
    test("Returns Set {'MISTInjuryType'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF $COUNT(GSW)>1 $FROM MISTInjuryType $THEN',
      });

      expect(result).toEqual(new Set(['MISTInjuryType']));
    });
  });

  describe('Test CountComplexExpr', () => {
    test("Returns Set {'MISTInjury', 'MISTInjuryLocation', 'MISTInjuryType'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition:
          '$IF $COUNT_COMPLEX($DISTINCT MISTInjuryLocation $IF Mechanical Instability,Deformity $FROM MISTInjuryType $THEN $AND $IF Right Lower Leg,Left Lower Leg,Right Thigh,Left Thigh,Right Arm,Left Arm,Right Forearm,Left Forearm $FROM MISTInjuryLocation $THEN)>1 $FROM MISTInjury $THEN',
      });

      expect(result).toEqual(new Set(['MISTInjury', 'MISTInjuryLocation', 'MISTInjuryType']));
    });

    test("Returns Set {'MISTInjury', 'MISTInjuryType', 'MISTInjuryLocation'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition:
          '$IF $COUNT_COMPLEX($IF Mechanical Instability,Deformity $FROM MISTInjuryType $THEN $AND $IF Right Lower Leg,Left Lower Leg,Right Thigh,Left Thigh,Right Arm,Left Arm,Right Forearm,Left Forearm $FROM MISTInjuryLocation $THEN)>1 $FROM MISTInjury $THEN',
      });

      expect(result).toEqual(new Set(['MISTInjury', 'MISTInjuryType', 'MISTInjuryLocation']));
    });
  });

  describe('Test VehicleImpactExpr', () => {
    test("Returns Set {'PositionImpactVehicle'}", () => {
      const result = conditionLanguage.getFieldEntries({
        condition: '$IF impactSides=6 $FROM PositionImpactVehicle $THEN',
      });

      expect(result).toEqual(new Set(['PositionImpactVehicle']));
    });
  });

  describe('Test complex condition', () => {
    test("Returns Set {'AgeInYears', 'SceneBloodPressureSystolic', 'BloodPressureSystolic', 'PeripheralPulseIsPalpable', 'SceneHeartRate', 'HeartRate', 'ArterialBloodGasBaseDeficit', 'ArterialBloodGasLactate', 'SceneVerbalResponse'}", () => {
      const condition = `
      (
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM SceneBloodPressureSystolic $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM SceneBloodPressureSystolic $THEN
        ) 
          $OR
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM BloodPressureSystolic $THEN
        ) 
          $OR
        (
          $IF >16 $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM BloodPressureSystolic $THEN
        )
          $OR
        (
          $IF NO $FROM PeripheralPulseIsPalpable $THEN
        ) 
          $OR
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM SceneHeartRate $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM SceneHeartRate $THEN
        )
          $OR
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM HeartRate $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM HeartRate $THEN
        )
          $OR
        $IF <=-3 $FROM ArterialBloodGasBaseDeficit $THEN
          $OR
        $IF >3 $FROM ArterialBloodGasLactate $THEN
      )
        $OR
      (
        $IF <16 $FROM AgeInYears $THEN
          $AND
        (
          $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN
        )
      )
      `;
      const result = conditionLanguage.getFieldEntries({ condition });

      expect(result).toEqual(
        new Set([
          'AgeInYears',
          'SceneBloodPressureSystolic',
          'BloodPressureSystolic',
          'PeripheralPulseIsPalpable',
          'SceneHeartRate',
          'HeartRate',
          'ArterialBloodGasBaseDeficit',
          'ArterialBloodGasLactate',
          'SceneVerbalResponse',
        ])
      );
    });
  });

  // describe('Test of the number of entries', () => {
  //   test('One entry', () => {
  //     const entries = conditionLanguage.getFieldEntries({
  //       condition: '$IF >=65 $FROM AgeInYears $THEN',
  //     });
  //
  //     expect(entries?.size).toBe(1);
  //     expect(entries?.has('AgeInYears')).toBeTruthy();
  //   });
  //
  //   test.skip('Two entries', () => {
  //     const entries = conditionLanguage.getFieldEntries({
  //       condition: '$IF <=165 $FROM Height $THEN $AND $IF >=100 $FROM Weight $THEN',
  //     });
  //
  //     expect(entries?.size).toBe(2);
  //     expect(entries?.has('Height')).toBeTruthy();
  //     expect(entries?.has('Weight')).toBeTruthy();
  //     expect([...entries!][0]).toBe('Height');
  //     expect([...entries!][1]).toBe('Weight');
  //   });
  // });

  describe('Test erroneous trigger', () => {
    test('Returns null', () => {
      const result = conditionLanguage.getFieldEntries({ condition: 'erroneous trigger' });

      expect(result).toBeNull();
    });
  });
});
