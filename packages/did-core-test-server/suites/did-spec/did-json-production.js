const didJsonProductionTests = (suiteConfig) => {
  if (suiteConfig.supportedContentTypes.includes('application/did+json')) {
    describe('did-json-production', () => {
      it('Numeric values representable as IEEE754 MUST be represented as a Number type.', () => {
        const [did] = suiteConfig.dids;
        const { didDocument } = suiteConfig[did]['application/did+json'];
        const knownNumericProperties = ['rating'];
        for (const [key, value] of Object.entries(didDocument)) {
          if (knownNumericProperties.includes(key)) {
            expect(typeof value).toBe('number');
          }
        }
      });

      it('Boolean values MUST be represented as a Boolean literal.', () => {
        const [did] = suiteConfig.dids;
        const { didDocument } = suiteConfig[did]['application/did+json'];
        const knownPublicProperties = ['publicAccess'];
        for (const [key, value] of Object.entries(didDocument)) {
          if (knownPublicProperties.includes(key)) {
            expect(typeof value).toBe('boolean');
          }
        }
      });
      it('Sequence value MUST be represented as an Array type.', () => {
        const [did] = suiteConfig.dids;
        const { didDocument } = suiteConfig[did]['application/did+json'];

        if (didDocument.verificationMethod) {
          expect(Array.isArray(didDocument.verificationMethod)).toBe(true);
        }

        if (didDocument.authentication) {
          expect(Array.isArray(didDocument.authentication)).toBe(true);
        }
        if (didDocument.assertionMethod) {
          expect(Array.isArray(didDocument.authentication)).toBe(true);
        }

        if (didDocument.capabilityInvocation) {
          expect(Array.isArray(didDocument.capabilityInvocation)).toBe(true);
        }

        if (didDocument.capabilityDelegation) {
          expect(Array.isArray(didDocument.capabilityDelegation)).toBe(true);
        }

        if (didDocument.keyAgreement) {
          expect(Array.isArray(didDocument.keyAgreement)).toBe(true);
        }
      });
      it('Unordered sets of values MUST be represented as an Array type.', () => {
        const [did] = suiteConfig.dids;
        const { didDocument } = suiteConfig[did]['application/did+json'];

        if (didDocument.verificationMethod) {
          expect(Array.isArray(didDocument.verificationMethod)).toBe(true);
        }

        if (didDocument.authentication) {
          expect(Array.isArray(didDocument.authentication)).toBe(true);
        }
        if (didDocument.assertionMethod) {
          expect(Array.isArray(didDocument.authentication)).toBe(true);
        }

        if (didDocument.capabilityInvocation) {
          expect(Array.isArray(didDocument.capabilityInvocation)).toBe(true);
        }

        if (didDocument.capabilityDelegation) {
          expect(Array.isArray(didDocument.capabilityDelegation)).toBe(true);
        }

        if (didDocument.keyAgreement) {
          expect(Array.isArray(didDocument.keyAgreement)).toBe(true);
        }
      });
      it('Sets of properties MUST be represented as an Object type.', () => {
        const [did] = suiteConfig.dids;
        const { didDocument } = suiteConfig[did]['application/did+json'];
        expect(typeof didDocument).toBe('object');
      });
      it('Empty values MUST be represented as a null literal.', () => {
        const [did] = suiteConfig.dids;
        const { didDocument } = suiteConfig[did]['application/did+json'];
        const knownNullProperties = ['additionalType'];
        for (const [key, value] of Object.entries(didDocument)) {
          if (knownNullProperties.includes(key)) {
            expect(value).toBeNull();
          }
        }
      });
    });
  }
};

module.exports = { didJsonProductionTests };
